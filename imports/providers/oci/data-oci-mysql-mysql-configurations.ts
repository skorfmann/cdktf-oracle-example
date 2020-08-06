// https://www.terraform.io/docs/providers/oci/r/data_oci_mysql_mysql_configurations.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "configuration_id": {
        "type": "string",
        "optional": true
      },
      "configurations": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "parent_configuration_id": "string",
              "shape_name": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "type": "string",
              "variables": [
                "list",
                [
                  "object",
                  {
                    "autocommit": "bool",
                    "binlog_expire_logs_seconds": "number",
                    "completion_type": "string",
                    "connect_timeout": "number",
                    "cte_max_recursion_depth": "number",
                    "default_authentication_plugin": "string",
                    "foreign_key_checks": "bool",
                    "generated_random_password_length": "number",
                    "information_schema_stats_expiry": "number",
                    "innodb_buffer_pool_instances": "number",
                    "innodb_buffer_pool_size": "string",
                    "innodb_ft_enable_stopword": "bool",
                    "innodb_ft_max_token_size": "number",
                    "innodb_ft_min_token_size": "number",
                    "innodb_ft_num_word_optimize": "number",
                    "innodb_ft_result_cache_limit": "number",
                    "innodb_ft_server_stopword_table": "string",
                    "innodb_lock_wait_timeout": "number",
                    "innodb_max_purge_lag": "number",
                    "innodb_max_purge_lag_delay": "number",
                    "local_infile": "bool",
                    "mandatory_roles": "string",
                    "max_connections": "number",
                    "max_execution_time": "number",
                    "max_prepared_stmt_count": "number",
                    "mysql_firewall_mode": "bool",
                    "mysql_zstd_default_compression_level": "number",
                    "mysqlx_connect_timeout": "number",
                    "mysqlx_deflate_default_compression_level": "number",
                    "mysqlx_deflate_max_client_compression_level": "number",
                    "mysqlx_document_id_unique_prefix": "number",
                    "mysqlx_enable_hello_notice": "bool",
                    "mysqlx_idle_worker_thread_timeout": "number",
                    "mysqlx_interactive_timeout": "number",
                    "mysqlx_lz4default_compression_level": "number",
                    "mysqlx_lz4max_client_compression_level": "number",
                    "mysqlx_max_allowed_packet": "number",
                    "mysqlx_min_worker_threads": "number",
                    "mysqlx_read_timeout": "number",
                    "mysqlx_wait_timeout": "number",
                    "mysqlx_write_timeout": "number",
                    "mysqlx_zstd_max_client_compression_level": "number",
                    "parser_max_mem_size": "number",
                    "query_alloc_block_size": "number",
                    "query_prealloc_size": "number",
                    "sql_mode": "string",
                    "sql_require_primary_key": "bool",
                    "sql_warnings": "bool",
                    "transaction_isolation": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "shape_name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "type": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMysqlMysqlConfigurationsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly configurationId?: string;
  readonly displayName?: string;
  readonly shapeName?: string;
  readonly state?: string;
  readonly type?: string[];
  /** filter block */
  readonly filter?: DataOciMysqlMysqlConfigurationsFilter[];
}
export class DataOciMysqlMysqlConfigurationsConfigurationsVariables extends ComplexComputedList {

  // autocommit - computed: true, optional: false, required: true
  public get autocommit() {
    return this.getBooleanAttribute('autocommit');
  }

  // binlog_expire_logs_seconds - computed: true, optional: false, required: true
  public get binlogExpireLogsSeconds() {
    return this.getNumberAttribute('binlog_expire_logs_seconds');
  }

  // completion_type - computed: true, optional: false, required: true
  public get completionType() {
    return this.getStringAttribute('completion_type');
  }

  // connect_timeout - computed: true, optional: false, required: true
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // cte_max_recursion_depth - computed: true, optional: false, required: true
  public get cteMaxRecursionDepth() {
    return this.getNumberAttribute('cte_max_recursion_depth');
  }

  // default_authentication_plugin - computed: true, optional: false, required: true
  public get defaultAuthenticationPlugin() {
    return this.getStringAttribute('default_authentication_plugin');
  }

  // foreign_key_checks - computed: true, optional: false, required: true
  public get foreignKeyChecks() {
    return this.getBooleanAttribute('foreign_key_checks');
  }

  // generated_random_password_length - computed: true, optional: false, required: true
  public get generatedRandomPasswordLength() {
    return this.getNumberAttribute('generated_random_password_length');
  }

  // information_schema_stats_expiry - computed: true, optional: false, required: true
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }

  // innodb_buffer_pool_instances - computed: true, optional: false, required: true
  public get innodbBufferPoolInstances() {
    return this.getNumberAttribute('innodb_buffer_pool_instances');
  }

  // innodb_buffer_pool_size - computed: true, optional: false, required: true
  public get innodbBufferPoolSize() {
    return this.getStringAttribute('innodb_buffer_pool_size');
  }

  // innodb_ft_enable_stopword - computed: true, optional: false, required: true
  public get innodbFtEnableStopword() {
    return this.getBooleanAttribute('innodb_ft_enable_stopword');
  }

  // innodb_ft_max_token_size - computed: true, optional: false, required: true
  public get innodbFtMaxTokenSize() {
    return this.getNumberAttribute('innodb_ft_max_token_size');
  }

  // innodb_ft_min_token_size - computed: true, optional: false, required: true
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }

  // innodb_ft_num_word_optimize - computed: true, optional: false, required: true
  public get innodbFtNumWordOptimize() {
    return this.getNumberAttribute('innodb_ft_num_word_optimize');
  }

  // innodb_ft_result_cache_limit - computed: true, optional: false, required: true
  public get innodbFtResultCacheLimit() {
    return this.getNumberAttribute('innodb_ft_result_cache_limit');
  }

  // innodb_ft_server_stopword_table - computed: true, optional: false, required: true
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }

  // innodb_lock_wait_timeout - computed: true, optional: false, required: true
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }

  // innodb_max_purge_lag - computed: true, optional: false, required: true
  public get innodbMaxPurgeLag() {
    return this.getNumberAttribute('innodb_max_purge_lag');
  }

  // innodb_max_purge_lag_delay - computed: true, optional: false, required: true
  public get innodbMaxPurgeLagDelay() {
    return this.getNumberAttribute('innodb_max_purge_lag_delay');
  }

  // local_infile - computed: true, optional: false, required: true
  public get localInfile() {
    return this.getBooleanAttribute('local_infile');
  }

  // mandatory_roles - computed: true, optional: false, required: true
  public get mandatoryRoles() {
    return this.getStringAttribute('mandatory_roles');
  }

  // max_connections - computed: true, optional: false, required: true
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_execution_time - computed: true, optional: false, required: true
  public get maxExecutionTime() {
    return this.getNumberAttribute('max_execution_time');
  }

  // max_prepared_stmt_count - computed: true, optional: false, required: true
  public get maxPreparedStmtCount() {
    return this.getNumberAttribute('max_prepared_stmt_count');
  }

  // mysql_firewall_mode - computed: true, optional: false, required: true
  public get mysqlFirewallMode() {
    return this.getBooleanAttribute('mysql_firewall_mode');
  }

  // mysql_zstd_default_compression_level - computed: true, optional: false, required: true
  public get mysqlZstdDefaultCompressionLevel() {
    return this.getNumberAttribute('mysql_zstd_default_compression_level');
  }

  // mysqlx_connect_timeout - computed: true, optional: false, required: true
  public get mysqlxConnectTimeout() {
    return this.getNumberAttribute('mysqlx_connect_timeout');
  }

  // mysqlx_deflate_default_compression_level - computed: true, optional: false, required: true
  public get mysqlxDeflateDefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_default_compression_level');
  }

  // mysqlx_deflate_max_client_compression_level - computed: true, optional: false, required: true
  public get mysqlxDeflateMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_max_client_compression_level');
  }

  // mysqlx_document_id_unique_prefix - computed: true, optional: false, required: true
  public get mysqlxDocumentIdUniquePrefix() {
    return this.getNumberAttribute('mysqlx_document_id_unique_prefix');
  }

  // mysqlx_enable_hello_notice - computed: true, optional: false, required: true
  public get mysqlxEnableHelloNotice() {
    return this.getBooleanAttribute('mysqlx_enable_hello_notice');
  }

  // mysqlx_idle_worker_thread_timeout - computed: true, optional: false, required: true
  public get mysqlxIdleWorkerThreadTimeout() {
    return this.getNumberAttribute('mysqlx_idle_worker_thread_timeout');
  }

  // mysqlx_interactive_timeout - computed: true, optional: false, required: true
  public get mysqlxInteractiveTimeout() {
    return this.getNumberAttribute('mysqlx_interactive_timeout');
  }

  // mysqlx_lz4default_compression_level - computed: true, optional: false, required: true
  public get mysqlxLz4DefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4default_compression_level');
  }

  // mysqlx_lz4max_client_compression_level - computed: true, optional: false, required: true
  public get mysqlxLz4MaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4max_client_compression_level');
  }

  // mysqlx_max_allowed_packet - computed: true, optional: false, required: true
  public get mysqlxMaxAllowedPacket() {
    return this.getNumberAttribute('mysqlx_max_allowed_packet');
  }

  // mysqlx_min_worker_threads - computed: true, optional: false, required: true
  public get mysqlxMinWorkerThreads() {
    return this.getNumberAttribute('mysqlx_min_worker_threads');
  }

  // mysqlx_read_timeout - computed: true, optional: false, required: true
  public get mysqlxReadTimeout() {
    return this.getNumberAttribute('mysqlx_read_timeout');
  }

  // mysqlx_wait_timeout - computed: true, optional: false, required: true
  public get mysqlxWaitTimeout() {
    return this.getNumberAttribute('mysqlx_wait_timeout');
  }

  // mysqlx_write_timeout - computed: true, optional: false, required: true
  public get mysqlxWriteTimeout() {
    return this.getNumberAttribute('mysqlx_write_timeout');
  }

  // mysqlx_zstd_max_client_compression_level - computed: true, optional: false, required: true
  public get mysqlxZstdMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_zstd_max_client_compression_level');
  }

  // parser_max_mem_size - computed: true, optional: false, required: true
  public get parserMaxMemSize() {
    return this.getNumberAttribute('parser_max_mem_size');
  }

  // query_alloc_block_size - computed: true, optional: false, required: true
  public get queryAllocBlockSize() {
    return this.getNumberAttribute('query_alloc_block_size');
  }

  // query_prealloc_size - computed: true, optional: false, required: true
  public get queryPreallocSize() {
    return this.getNumberAttribute('query_prealloc_size');
  }

  // sql_mode - computed: true, optional: false, required: true
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }

  // sql_require_primary_key - computed: true, optional: false, required: true
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }

  // sql_warnings - computed: true, optional: false, required: true
  public get sqlWarnings() {
    return this.getBooleanAttribute('sql_warnings');
  }

  // transaction_isolation - computed: true, optional: false, required: true
  public get transactionIsolation() {
    return this.getStringAttribute('transaction_isolation');
  }
}
export class DataOciMysqlMysqlConfigurationsConfigurations extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_configuration_id - computed: true, optional: false, required: true
  public get parentConfigurationId() {
    return this.getStringAttribute('parent_configuration_id');
  }

  // shape_name - computed: true, optional: false, required: true
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // variables - computed: true, optional: false, required: true
  public get variables() {
    return 'not implemented' as any;
  }
}
export interface DataOciMysqlMysqlConfigurationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMysqlMysqlConfigurations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_configurations',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._configurationId = config.configurationId;
    this._displayName = config.displayName;
    this._shapeName = config.shapeName;
    this._state = config.state;
    this._type = config.type;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string;
  public get configurationId() {
    return this._configurationId;
  }
  public set configurationId(value: string | undefined) {
    this._configurationId = value;
  }

  // configurations - computed: true, optional: false, required: true
  public configurations(index: string) {
    return new DataOciMysqlMysqlConfigurationsConfigurations(this, 'configurations', index);
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // shape_name - computed: false, optional: true, required: false
  private _shapeName?: string;
  public get shapeName() {
    return this._shapeName;
  }
  public set shapeName(value: string | undefined) {
    this._shapeName = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[];
  public get type() {
    return this._type;
  }
  public set type(value: string[] | undefined) {
    this._type = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMysqlMysqlConfigurationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMysqlMysqlConfigurationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      configuration_id: this._configurationId,
      display_name: this._displayName,
      shape_name: this._shapeName,
      state: this._state,
      type: this._type,
      filter: this._filter,
    };
  }
}
