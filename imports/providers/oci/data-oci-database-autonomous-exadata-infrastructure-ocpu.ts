// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_exadata_infrastructure_ocpu.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_exadata_infrastructure_id": {
        "type": "string",
        "required": true
      },
      "by_workload_type": {
        "type": [
          "list",
          [
            "object",
            {
              "adw": "number",
              "atp": "number"
            }
          ]
        ],
        "computed": true
      },
      "consumed_cpu": {
        "type": "number",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "total_cpu": {
        "type": "number",
        "computed": true
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

export interface DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig extends TerraformMetaArguments {
  readonly autonomousExadataInfrastructureId: string;
}
export class DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType extends ComplexComputedList {

  // adw - computed: true, optional: false, required: true
  public get adw() {
    return this.getNumberAttribute('adw');
  }

  // atp - computed: true, optional: false, required: true
  public get atp() {
    return this.getNumberAttribute('atp');
  }
}

// Resource

export class DataOciDatabaseAutonomousExadataInfrastructureOcpu extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureOcpuConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure_ocpu',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _autonomousExadataInfrastructureId: string;
  public get autonomousExadataInfrastructureId() {
    return this._autonomousExadataInfrastructureId;
  }
  public set autonomousExadataInfrastructureId(value: string) {
    this._autonomousExadataInfrastructureId = value;
  }

  // by_workload_type - computed: true, optional: false, required: true
  public byWorkloadType(index: string) {
    return new DataOciDatabaseAutonomousExadataInfrastructureOcpuByWorkloadType(this, 'by_workload_type', index);
  }

  // consumed_cpu - computed: true, optional: false, required: true
  public get consumedCpu() {
    return this.getNumberAttribute('consumed_cpu');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // total_cpu - computed: true, optional: false, required: true
  public get totalCpu() {
    return this.getNumberAttribute('total_cpu');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: this._autonomousExadataInfrastructureId,
    };
  }
}
