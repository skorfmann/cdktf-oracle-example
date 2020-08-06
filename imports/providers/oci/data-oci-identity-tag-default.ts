// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tag_default.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "is_required": {
        "type": "bool",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tag_default_id": {
        "type": "string",
        "required": true
      },
      "tag_definition_id": {
        "type": "string",
        "computed": true
      },
      "tag_definition_name": {
        "type": "string",
        "computed": true
      },
      "tag_namespace_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "value": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciIdentityTagDefaultConfig extends TerraformMetaArguments {
  readonly tagDefaultId: string;
}

// Resource

export class DataOciIdentityTagDefault extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTagDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag_default',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tagDefaultId = config.tagDefaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_required - computed: true, optional: false, required: true
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_default_id - computed: false, optional: false, required: true
  private _tagDefaultId: string;
  public get tagDefaultId() {
    return this._tagDefaultId;
  }
  public set tagDefaultId(value: string) {
    this._tagDefaultId = value;
  }

  // tag_definition_id - computed: true, optional: false, required: true
  public get tagDefinitionId() {
    return this.getStringAttribute('tag_definition_id');
  }

  // tag_definition_name - computed: true, optional: false, required: true
  public get tagDefinitionName() {
    return this.getStringAttribute('tag_definition_name');
  }

  // tag_namespace_id - computed: true, optional: false, required: true
  public get tagNamespaceId() {
    return this.getStringAttribute('tag_namespace_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tag_default_id: this._tagDefaultId,
    };
  }
}
